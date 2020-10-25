import React from 'react'

const ProjectDetails = (props) => {
    const id=props.match.params.id
    console.log(props)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project  Title {id}</span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perspiciatis dolorum atque saepe, architecto reprehenderit iure doloremque sequi molestiae similique temporibus iste quia dolor quis cumque labore doloribus nemo nostrum?
                    </p>
                </div>
                <div className="card-actions grey lighten-4 grey-text">
                    <div className="">Posted by net ninja</div>
                    <div className="">2 sepetember</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
