import os
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()
with open('code.html', 'r', encoding='utf-8') as f:
    code_html = f.read()

start_head = code_html.find('<script src="https://cdn.tailwindcss.com')
end_head = code_html.find('</style>') + len('</style>')
head_content = code_html[start_head:end_head]

start_body = code_html.find('<!-- Ingredients Section -->')
end_body = code_html.find('</footer>') + len('</footer>')
body_content = code_html[start_body:end_body]

wrapped_body = f'''
    <div class="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container relative" style="z-index: 10; background-color: #fcf9f8;">
{body_content}
    </div>
'''

index_html = index_html.replace('</head>', f'    {head_content}\n</head>')
index_html = index_html.replace('    <script src="script.js"></script>', f'{wrapped_body}\n    <script src="script.js"></script>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)
print('Successfully merged!')
