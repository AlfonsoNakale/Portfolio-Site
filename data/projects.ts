export type Project = {
    slug: string
    title: string
    description: string
    tech: string[]
    content: string
    externalUrl?: string
    image?: string
}

export const projects: Project[] = [
    {
        slug: 'unlocking-user-insights-in-namibia',
        title: 'Unlocking User Insights in Namibia',
        description: 'Why Microsoft Clarity Should Be Your Go-to Analytics Tool.',
        tech: ['Analytics', 'Microsoft Clarity', 'SEO'],
        content: 'In many Namibian businesses, websites are still treated as checkbox assets—necessary, yet under-leveraged.',
        image: '/project-images/unlocking-user-insights-in-namibia.jpg',
        externalUrl: 'https://clarity.microsoft.com'
    }
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug)
}