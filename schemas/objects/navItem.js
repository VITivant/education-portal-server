import { GrNavigate } from "react-icons/gr";

export default {
    name: 'navItem',
    title: 'Navigation Item',
    type: 'object',
    icon: GrNavigate,
    fields: [
        {
            name: "text",
            type: "string",
            title: "Navigation Text"
        },
        {
            name: "navigationItemUrl",
            type: "link",
            title: "Navigation Item URL"
        }
    ]
}