import React from 'react';
import PropTypes from "prop-types";
import { ListElement } from './ListElement';
import { useNavigate } from "react-router-dom";

export const ArticlesList = ({ data }) => {
    const Navigate = useNavigate();
    const handleClick = (id) => {
        console.log(id);
        Navigate.push(`/article?id=${id}`);
    }
    return (
        <div className="card-group p-4 mx-3 justify-content-center">
            {data.map(item => (
                <ListElement
                    title={item.title}
                    imageUrl={item.imageUrl}
                    key={item.id}
                    onClick={handleClick}
                    id={item.id}
                />
            ))}
        </div>
    )
}

ArticlesList.propTypes = {
    data: PropTypes.array.isRequired,
}