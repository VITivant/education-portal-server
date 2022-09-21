import { GrNavigate } from "react-icons/gr";

export default {
    name: 'nav',
    title: 'Navigation',
    type: 'document',
    icon: GrNavigate,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: 'navId',
            type: 'string',
            title: "Navigation Id"
        },
        {
            name: "navItems",
            type: "array",
            title: "Navigation items",
            of: [{ type: "navItem" }]
        }
    ]
}