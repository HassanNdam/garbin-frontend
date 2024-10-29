# Nom du conteneur
CONTAINER_NAME=garbin-client-dev

# Nom de l'image Docker
IMAGE_NAME=garbin-client-dev

# Fichier docker-compose
COMPOSE_FILE=docker-compose.yml

# Commandes Makefile

# Construire l'image Docker
build:
	docker-compose -f $(COMPOSE_FILE) build $(CONTAINER_NAME)

# Lancer le conteneur en arrière-plan
up:
	docker-compose -f $(COMPOSE_FILE) up -d $(CONTAINER_NAME)

# Arrêter le conteneur
down:
	docker-compose -f $(COMPOSE_FILE) down

# Nettoyer les volumes non utilisés et les images orphelines
clean:
	docker system prune -f
	docker volume prune -f

# Supprimer les conteneurs, les volumes, les réseaux et les images associés
purge:
	docker-compose -f $(COMPOSE_FILE) down --rmi all --volumes --remove-orphans

# Voir les logs du conteneur en temps réel
logs:
	docker-compose -f $(COMPOSE_FILE) logs -f $(CONTAINER_NAME)

# Accéder au conteneur via un shell
shell:
	docker exec -it $(shell docker ps -qf "name=$(CONTAINER_NAME)") /bin/bash

# Redémarrer le conteneur
restart: down up

test_unit:
	@echo "Running unit tests with Jest"
	cd client && npm install && npm run test

test_e2e:
	@echo "Running E2E tests with Playwright"
	cd client && npm ci && npx playwright install --with-deps && npm run test:e2e