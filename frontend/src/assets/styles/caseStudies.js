export const styles = {
    section: {
        padding: '60px',
    },
    title: {
        fontFamily: 'Recoleta',
        color: '#F5A34C',
        fontWeight: 700,
    },
    subTitle: {
        fontFamily: 'Gotham',
        fontWeight: 700,
    },
    gridArea: {
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
    },
    grid: {
        display: 'grid',
        gridAutoFlow: 'column',
        gap: 1,
        border: '3px solid #F5A34C',
        borderRadius: '22px',
    },
    gridItem: {
        gridRow: 'span 1',
        gridColumn: '1',
        height: '100px',
    },
    gridItemBig: {
        gridRow: 'span 3',
        gridColumn: 'span 2',
        height: '320px',
    },
    h2: {
        fontWeight: 700,
        fontSize: '2.7rem',
    },
    sectionWithBorder: {
        padding: '60px',
        border: '3px solid #F5A34C',
        borderRadius: '22px',
        gridColumn: 'span 2',
        gridRow: 'span 3',
    },
    body2: {
        fontWeight: 300,
        maxWidth: '60%',
        pb: '20px',
    },
    budgetSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};