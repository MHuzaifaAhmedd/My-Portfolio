# Portfolio Frontend Deployment (Docker)

Container name: portfolio-frontend
Internal port: 80 (nginx)
Host port: 3102 (chosen to avoid conflicts with existing services on ports 3000-3001, 8000, 8080)

Platform: linux/amd64

Build-time env:
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (optional - for contact form functionality)

GHCR image: ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod

## 1) Prepare
- Web3Forms access key is configured: `94f0fdac-89ab-4338-8a79-89e988796468`
  - This enables contact form functionality
  - If not set, the contact form will fallback to opening email client

## 2) Build image (bakes env)
```powershell
# Windows PowerShell
$env:NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY='94f0fdac-89ab-4338-8a79-89e988796468'
docker build --platform=linux/amd64 `
  --build-arg NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=$env:NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY `
  -t ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod -f Dockerfile .
```

```bash
# Linux bash
export NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY='94f0fdac-89ab-4338-8a79-89e988796468'
docker build --platform=linux/amd64 \
  --build-arg NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=$NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY \
  -t ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod -f Dockerfile .
```

**Note:** If you don't have a Web3Forms access key, you can build without it:
```powershell
# Windows PowerShell
docker build --platform=linux/amd64 -t ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod -f Dockerfile .
```

```bash
# Linux bash
docker build --platform=linux/amd64 -t ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod -f Dockerfile .
```

## 3) Create network (once - if not already exists)
```bash
docker network create portfolio-net || true
```

**Note:** If you want to use the existing `ems-net` network (if other services use it), you can skip this step and use `ems-net` in the run command.

## 4) Push & Deploy (copy-paste)
```powershell
# Windows PowerShell
$env:GHCR_TOKEN | docker login ghcr.io -u mhuzaifaahmedd --password-stdin
docker push ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker network create portfolio-net 2>$null
docker pull ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker rm -f portfolio-frontend 2>$null
docker run -d `
  --name portfolio-frontend `
  --network portfolio-net `
  -p 3102:80 `
  --restart unless-stopped `
  ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
```

```bash
# Linux bash
docker login ghcr.io -u mhuzaifaahmedd -p "$GHCR_TOKEN"
docker push ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker network create portfolio-net || true
docker pull ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker rm -f portfolio-frontend 2>/dev/null || true
docker run -d \
  --name portfolio-frontend \
  --network portfolio-net \
  -p 3102:80 \
  --restart unless-stopped \
  ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
```

## 5) Redeploy (full workflow)
```powershell
# Windows PowerShell
$env:NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY='94f0fdac-89ab-4338-8a79-89e988796468'
docker build --platform=linux/amd64 `
  --build-arg NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=$env:NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY `
  -t ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod -f Dockerfile .
$env:GHCR_TOKEN | docker login ghcr.io -u mhuzaifaahmedd --password-stdin
docker push ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker rm -f portfolio-frontend 2>$null
docker run -d `
  --name portfolio-frontend `
  --network portfolio-net `
  -p 3102:80 `
  --restart unless-stopped `
  ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
```

```bash
# Linux bash
export NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY='94f0fdac-89ab-4338-8a79-89e988796468'
docker build --platform=linux/amd64 \
  --build-arg NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=$NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY \
  -t ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod -f Dockerfile .
docker login ghcr.io -u mhuzaifaahmedd -p "$GHCR_TOKEN"
docker push ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker rm -f portfolio-frontend 2>/dev/null || true
docker run -d \
  --name portfolio-frontend \
  --network portfolio-net \
  -p 3102:80 \
  --restart unless-stopped \
  ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
```

## 6) Access
```bash
http://<SERVER_IP>:3102
```

## 7) Quick Deploy (if image already pushed)
```powershell
# Windows PowerShell
docker pull ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker rm -f portfolio-frontend 2>$null
docker run -d `
  --name portfolio-frontend `
  --network portfolio-net `
  -p 3102:80 `
  --restart unless-stopped `
  ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
```

```bash
# Linux bash
docker pull ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
docker rm -f portfolio-frontend 2>/dev/null || true
docker run -d \
  --name portfolio-frontend \
  --network portfolio-net \
  -p 3102:80 \
  --restart unless-stopped \
  ghcr.io/mhuzaifaahmedd/portfolio-frontend:prod
```

## Notes:
- Since env is baked at build time, rebuild and redeploy to update environment variables
- The portfolio is a static Next.js export, served efficiently with nginx
- Port 3102 is mapped to avoid conflicts with your existing services (3000, 3001, 8000, 8080)
- If you want to use the same network as your other services, replace `portfolio-net` with `ems-net` in the run commands
- Contact form will work with Web3Forms if `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set, otherwise it falls back to opening email client

