# Guide de Déploiement

Ce document explique les différentes options pour déployer le projet.

## 📋 Options de déploiement

### 1. GitHub Pages (Automatique)

**Avantages** : ✅ Gratuit, ✅ Automatique, ✅ Intégré à GitHub

**Fonctionnement** :
- À chaque push sur `main`, le workflow construit et déploie sur GitHub Pages
- Site accessible via `https://<username>.github.io/<repo-name>/`
- Configuration : aucune, c'est automatique !

**Activation** :
1. Aller à "Settings" → "Pages"
2. Sélectionner "GitHub Actions" comme source
3. C'est fait !

---

### 2. Docker Local (Développement)

**Avantages** : ✅ Simple, ✅ Isolation, ✅ Testable avant prod

**Prérequis** : Docker et docker-compose installés

**Commandes** :
```bash
# Avec docker-compose (recommandé)
npm run docker:compose

# Ou avec Docker CLI
npm run docker:build
npm run docker:run

# Ou serveur HTTP simple
npm run serve
```

**Accès** : http://localhost:8080

---

### 3. Docker Registry / Docker Hub (Production)

**Avantages** : ✅ Scalabilité, ✅ Multi-déploiement, ✅ Versioning

**Étapes** :

1. **Build et tag local** :
```bash
docker build -t <username>/videogames:latest .
```

2. **Login Docker Hub** :
```bash
docker login
```

3. **Push vers registry** :
```bash
docker push <username>/videogames:latest
```

4. **Utiliser l'image** :
```bash
docker run -p 8080:8080 <username>/videogames:latest
```

> **Note** : Ajouter cette étape au workflow GitHub Actions pour automatiser les pushes

---

### 4. Azure Container Instances (Production Cloud)

**Avantages** : ✅ Managed, ✅ Scalable, ✅ Intégration Azure

**Étapes** :

1. **Créer un Azure Container Registry** :
```bash
az acr create --resource-group <group> --name <registry-name> --sku Basic
```

2. **Build et push** :
```bash
az acr build --registry <registry-name> --image videogames:latest .
```

3. **Déployer** :
```bash
az container create \
  --resource-group <group> \
  --name videogames \
  --image <registry-name>.azurecr.io/videogames:latest \
  --cpu 1 --memory 1 \
  --ports 8080 \
  --environment-variables NODE_ENV=production
```

---

### 5. Kubernetes (Production grande échelle)

**Avantages** : ✅ Orchestration, ✅ Auto-scaling, ✅ Multi-région

**Fichier : `k8s/deployment.yaml`** (à ajouter)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: videogames
spec:
  replicas: 3
  selector:
    matchLabels:
      app: videogames
  template:
    metadata:
      labels:
        app: videogames
    spec:
      containers:
      - name: videogames
        image: <registry>/videogames:latest
        ports:
        - containerPort: 8080
```

**Déploiement** :
```bash
kubectl apply -f k8s/deployment.yaml
kubectl expose deployment videogames --type=LoadBalancer --port=80 --target-port=8080
```

---

## 🔄 Pipeline d'Infrastructure (IaC)

Pour ajouter une infrastructure codifiée, créer des fichiers Terraform ou Bicep :

```
infrastructure/
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
└── bicep/
    └── main.bicep
```

---

## 🔐 Sécurité en Production

Bonnes pratiques avant de déployer :

✅ **Secrets** : Utiliser GitHub Secrets ou Azure Key Vault
✅ **HTTPS** : Forcer HTTPS sur les domaines personnalisés
✅ **Audit** : Vérifier `npm audit` avant chaque déploiement
✅ **Monitoring** : Activer les logs et l'alerting
✅ **Backups** : Planifier des sauvegardes régulières

---

## 📊 Monitoring & Métriques

### GitHub Pages
- Voir l'historique sous "Settings" → "Pages"
- Logs disponibles dans le workflow

### Docker / ACI
- Monitorer avec `docker stats`
- Azure Monitor pour ACI
- Application Insights pour alerting avancé

---

## 🚀 Workflow de déploiement complet

```mermaid
graph TD
    A[Push vers main] -->|GitHub Actions| B[Run CI]
    B -->|Tests OK| C[Build Docker]
    C -->|Image OK| D[Push Registry]
    D -->|Deploy Job| E{Environnement?}
    E -->|Pages| F[GitHub Pages]
    E -->|Container| G[Azure/Docker Hub]
    F :--> H[Production]
    G :--> H
```

---

## 💡 Tips

- Utiliser des tags pour les releases : `videogames:1.0.0`, `videogames:latest`
- Automatiser via workflows : `push` → Build → Test → Deploy
- Monitorer les coûts si vous utilisez Azure ou AWS
- Tester le déploiement localement avant production (aka "pet-vs-cattle")

---

**Besoin d'aide ?** Voir [README](../README.md) et [CONTRIBUTING](CONTRIBUTING.md)
