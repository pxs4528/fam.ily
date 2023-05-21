//add bucket list form frontend
import React, { Component } from 'react';


const AddBucketList = () => {
    return(
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="Title" placeholder="Bucket List Title"  />
                <input type="text" name="description" placeholder="Bucket List Description" />
                <input type="text" name="location" placeholder="Bucket List Location" />
                <input type="submit" value={props.label} />
            </form>
        </>
    )
}

