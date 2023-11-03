import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

// export default function Category() {
//   return (
//     <Accordion type="single" collapsible>
//         <AccordionItem value="item-1">
//             <AccordionTrigger>Is it accessible?</AccordionTrigger>
//             <AccordionContent>
//                 Yes. It adheres to the WAI-ARIA design pattern.
//             </AccordionContent>
//         </AccordionItem>
//     </Accordion>
//   )
// }



function AccordionItems({ value, children }) {
    return (
        <div className="accordion-item">
            <AccordionTriggers>{value}</AccordionTriggers>
            <AccordionContents>{children}</AccordionContents>
        </div>
    );
}

function Accordions({ items }) {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItems key={index} value={item.value}>
                    {item.content}
                </AccordionItems>
            ))}
        </div>
    );
}

function AccordionWrapper({ children }) {
    return <div className="accordion-wrapper">{children}</div>;
}

function AccordionTriggers({ children, onClick }) {
    return (
        <div className="accordion-trigger" onClick={onClick}>
            {children}
        </div>
    );
}

function AccordionContents({ children }) {
    return <div className="accordion-content">{children}</div>;
}

export { Accordions, AccordionWrapper, AccordionTriggers, AccordionContents };

