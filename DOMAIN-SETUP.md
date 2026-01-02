# Domain Setup for Portfolio - huzaifaahmed.tech

## Prerequisites
- Domain DNS configured: `www` CNAME pointing to `huzaifaahmed.tech`
- EC2 instance with nginx installed
- Portfolio container running on port 3102

## Step 1: Install Nginx (if not already installed)

```bash
sudo apt update
sudo apt install nginx -y
```

## Step 2: Copy Nginx Configuration

Copy the `nginx-portfolio.conf` file to your EC2 server, then:

```bash
# Copy the config file to nginx sites-available
sudo cp nginx-portfolio.conf /etc/nginx/sites-available/huzaifaahmed.tech

# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/huzaifaahmed.tech /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

## Step 3: Set Up SSL with Let's Encrypt (Recommended)

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d huzaifaahmed.tech -d www.huzaifaahmed.tech

# Certbot will automatically update your nginx config with SSL settings
```

After SSL is set up, uncomment the SSL server block in the nginx config and comment out the HTTP-only block.

## Step 4: Verify DNS Configuration

Make sure your domain DNS has:
- A record: `huzaifaahmed.tech` → Your EC2 Public IP
- CNAME record: `www` → `huzaifaahmed.tech`

Check DNS propagation:
```bash
dig huzaifaahmed.tech
dig www.huzaifaahmed.tech
```

## Step 5: Test the Setup

```bash
# Test from server
curl -I http://localhost
curl -I http://huzaifaahmed.tech

# Test from your local machine
curl -I http://huzaifaahmed.tech
```

## Step 6: Configure Firewall (if needed)

```bash
# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'
# Or specifically:
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Troubleshooting

### Check nginx status:
```bash
sudo systemctl status nginx
```

### Check nginx logs:
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Verify container is running:
```bash
docker ps | grep portfolio-frontend
curl http://localhost:3102
```

### Test nginx configuration:
```bash
sudo nginx -t
```

## Quick Setup Script (Copy-paste on EC2)

```bash
# Create nginx config
sudo tee /etc/nginx/sites-available/huzaifaahmed.tech > /dev/null <<EOF
server {
    listen 80;
    server_name huzaifaahmed.tech www.huzaifaahmed.tech;

    location / {
        proxy_pass http://localhost:3102;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/huzaifaahmed.tech /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t && sudo systemctl reload nginx

# Install certbot and get SSL
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d huzaifaahmed.tech -d www.huzaifaahmed.tech
```


