export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString('es-MX', {
        timeZone: "UTC",
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })
}

export function formatBlogPosts(posts, {
    filterDraft = true,
    filterFuture = true,
    sortByDate = true,
    limit = 10,
} = {}) {
    const filteredPosts = posts.reduce((acc, post) => {
        const { date, draft } = post.frontmatter

        if (filterDraft && draft) return acc

        if (filterFuture && new Date(date) > new Date()) return acc

        acc.push(post)
        return acc
    }, [])

    if (sortByDate) {
        filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    } else {
        filteredPosts.sort(() => Math.random() - 0.5)
    }

    if (typeof limit === 'number') {
        return filteredPosts.slice(0, limit)
    }

    return filteredPosts
}