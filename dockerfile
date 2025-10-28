# Gunakan image Nginx resmi sebagai base image
FROM nginx:alpine

# Tentukan maintainer (opsional)
LABEL maintainer="mridwan@kampus.ac.id"

# Hapus konfigurasi default nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin semua file HTML, CSS, JS, dan gambar ke folder web server
COPY . /usr/share/nginx/html

# Ekspos port 80 untuk diakses dari browser
EXPOSE 80

# Jalankan Nginx di foreground (default command)
CMD ["nginx", "-g", "daemon off;"]
