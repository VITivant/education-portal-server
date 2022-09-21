import S from '@sanity/desk-tool/structure-builder'
import {createDeskHierarchy} from '@sanity/hierarchical-document-list'

export default () => {
    return S.list()
        .title('Content')
        .items([
            ...S.documentTypeListItems(), // or whatever other structure you have
            createDeskHierarchy({
                title: 'Main table of contents',

                // The hierarchy will be stored in this document ID 👇
                documentId: 'main-table-of-contents',

                // Document types editors should be able to include in the hierarchy
                referenceTo: ['lesson'],

            })
        ])
}