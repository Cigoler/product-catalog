import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


/**
 * Renders a wrapper component that displays a list of items in an accordion.
 * @param {Object} props - The component props.
 * @param {Array} props.items - The list of items to display.
 * @param {string} [props.type="single"] - The type of accordion to display.
 * @param {boolean} [props.collapsible=true] - Whether the accordion is collapsible or not.
 * @returns {JSX.Element} - The rendered component.
 */
function AccordionWrapper({items, type="single", collapsible=true}) {
    return (
        <Accordion type={type} collapsible={collapsible}>
            <Items items={items}/>
        </Accordion>
    )
}

/**
 * Renders a list of items as an accordion.
 * @param {Object[]} items - An array of objects representing the items to be rendered.
 * @param {string} items[].value - The value of the item.
 * @param {string} items[].title - The title of the item.
 * @param {string} items[].content - The content of the item.
 * @returns {JSX.Element} - The rendered accordion items.
 */
function Items({items}) {
    return (
        <>
            {items.map((item, index) => (
                    <AccordionItem value={item.value} key={index}>
                        <AccordionTrigger>
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
            ))}
        </>
    )
}

export { AccordionWrapper };

const sampleItems = [
    {
        value: "item1",
        title: "Item 1",
        content: "This is the content for item 1",
    },
    {
        value: "item2",
        title: "Item 2",
        content: "This is the content for item 2",
    },
    {
        value: "item3",
        title: "Item 3",
        content: "This is the content for item 3",
    },
];


