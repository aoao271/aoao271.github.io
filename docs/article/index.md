# 記事一覧

{% for page in navigation.pages %}
{% if not page.is_index %}
- [{{ page.title }}]({{ page.url }})
{% endif %}
{% endfor %}
