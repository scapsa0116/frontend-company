import React from 'react'
import {DocumentDetails }from '../components/DocumentDetails'



export const DocumentsList = ({ documents }) => {
console.log(documents)

return (
    <div>
     {documents.map(document => <DocumentDetails document = {document} key = {document.id}/>)}
    </div>
)


}