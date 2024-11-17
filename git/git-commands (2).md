### Новые GIT команды:

1. `git fetch` - загружает коммиты, файлы и ссылки из удаленного репозитория в ваш локальный репозиторий, при этом не сливая их с кодом.
   Это является безопасным способом проверки коммитов перед их интеграцией в локальный репозиторий

2. `git merge` - слияние веток

3. `git pull = git fetch + git merge`

4. `git branch` - просмотр локальных веток

5. `git branch -r` - просмотр только удаленных веток

6. `git branch -a` - просмотр всех локальных и удаленных веток

7. `git checkout -b branch-name` - создать ветку с именем branch-name и сразу же переключиться в нее. Ответвление будет происходить от той ветки, в которой вы находитесь в момент вызова данной команды. Важно: перед использованием этой команды, не должно быть изменений и нужно сделать git pull

8. `git branch branch-name` - создать ветку с именем branch-name, не переключаясь в нее

9. `git branch -D branch-name` - удалить ветку branch-name (локально)

10. `git push --set-upstream origin branch-name` - если ветка удаленно еще не созданна, то создает ветку branch-name в удаленном репозитории, устанавливает связь между локальной и удаленной веткой branch-name(команда --set-upstream) и заливает последние закоммиченные изменения в удаленный репозиторий

11. `git push origin --delete branch-name` - удалить ветку в удаленном репозитории

12. `git reset --soft HEAD^` - изменения, сделанные в коммите, должны остаться в индексе (стейджинг). Это значит, что после выполнения этой команды все файлы, которые были частью отменённого коммита, будут оставлены в подготовленном состоянии для нового коммита

13. `git reset --mixed HEAD^` - изменения должны быть убраны из индекса (стейджинга), но оставлены в рабочей директории.

14. `git reset --hard HEAD^` - полностью сбрасывает указатель на коммит, очищает индекс и удаляет изменения из рабочей директории
