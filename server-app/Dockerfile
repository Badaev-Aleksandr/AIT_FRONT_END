FROM node:alpine

WORKDIR /app

# Копируем файл package.json в контейнер
COPY package.json ./

# Устанавливаем зависимости приложения с помощью npm 
RUN npm install 

#Копируем все фалы из текущей директории
COPY ./ ./

# Открываем порт 3000 для связи
EXPOSE 3000

# Команда, которая должна выполнится при запуске контейнера 
CMD ["node", "index.js"]