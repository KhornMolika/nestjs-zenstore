# Command Docker

### to run docker
- `docker compose up -d`
### to stop docker
- `docker compose down -v`

Here are the essential commands for your workflow:

### 1. Database Management (The "Daily" Commands)
## Since you are using Docker for your PostgreSQL database, these will be your most used commands.

- `docker compose up -d`~: Starts your database in the background. Use this at the start of your work session.

- `docker compose down`: Stops and removes the containers. Use this when you're done for the day.

- `docker compose stop`: Stops the containers but doesn't remove them (faster than down).

- `docker compose start`: 
- `docker start zenstore-db`: Start the existing container

- `docker compose ps`: Shows the status of your services (checking if zenstore-db is actually healthy).

### 2. Troubleshooting & Data Management
## If your database gets messy or you need to peek inside, use these:

- `docker compose logs -f [service_name]`: Follow the live logs of your database. Great for seeing why a connection failed.

- `docker exec -it zenstore-db psql -U postgres`: Jumps directly into the PostgreSQL terminal inside the container.

- `docker compose down -v`: The "Nuclear Option." It stops the containers and wipes the data volumes. Use this if your local database is corrupted and you want to start fresh with TypeORM's synchronize: true.

### 3. NestJS Application Containerization
## If you decide to run the NestJS app inside Docker (not just the DB), you'll use:

- `docker compose up --build`: Rebuilds the image and starts the containers. You need this whenever you change package.json or your Dockerfile.

- `docker exec -it [app_container_name] sh`: Enters the shell of your NestJS app container (useful for running migrations manually).



### ==================================================================================

### My Docker Cheat Sheet

## At the start of the day
- docker compose up -d

(Creates and starts the database.)

## When finishing work (Best Practice)
- docker compose stop

(Pauses the DB. Fast and keeps things clean.)

## When you return to work
- docker compose start

(Instantly wakes up the paused DB.)

## When switching projects / Changing config
- docker compose down

(Cleans up the network and removes container instances.)

## When you want to DELETE ALL DATA
- docker compose down -v

(Deletes the database tables and records entirely.)

### Next Steps for your NestJS App

## Now that your database environment is stable:

- Run docker compose up -d to get the DB back online.

- Run npm run start:dev in your NestJS terminal.

- Check if the ECONNREFUSED error is gone.