import React from 'react';

const BlogDetails = ({ singleBlog }) => {
    const { name, details } = singleBlog;
    return (
        <div>
            <img src="" alt="" />
            {name}
            {details}
        </div>
    );
};

export default BlogDetails;
