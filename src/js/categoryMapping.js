const categoryMap = {
    'math': 'Mates',
    'maths': 'Mates',
    'physics': 'Física',
    'tech': 'Tecnología',
    'soft-skills': 'Habilidades Blandas',
    'trends': 'Tendencias',
    'tools': 'Herramientas',
    'anniversaries': 'Efemérides',
    'fun-facts': 'Curiosidades',
    'findings': 'Hallazgos',
    'general': 'General'
};

export function getDisplayName(category) {
    const slug = category.toLowerCase().replace(/\s+/g, '-');
    return categoryMap[slug] || category;
}