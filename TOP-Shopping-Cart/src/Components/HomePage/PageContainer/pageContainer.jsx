export default function PageContainer( {pageName})

    
{
    const pageTitle = () => pageName ? pageName : "Untitled Page";

    return(
        <div>
            {pageTitle()}
        </div>
    )
}