import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { Button } from "@/components/ui/button"

  import { Badge } from "@/components/ui/badge"


  import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
                        <AccordionTrigger className="dark:text-white">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {item.content.map((product) => (
                                    <Card key={product.slug} className="group">
                                    <Drawer>
                                        <DrawerTrigger className="w-full">
                                            
                                                {product.data.heroImage &&
                                                    <div className="cursor-pointer relative m-0 overflow-clip rounded-t-lg shadow-md h-32 w-full bg-clip-border">						
                                                        <div className="h-full w-full transition ease-in-out bg-gray-100/80 rounded-t-md">
                                                              			  	
                                                        <img src={product.data.heroImage} alt={product.data.title} className="absolute h-full w-full object-contain rounded-t-md"/>		
                                                        </div> 
                                                        {/* <Badge variant="secondary" className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                                            {product.data.catalogueNumber}
                                                        </Badge>   */}
                                                    </div>
                                                }
                                                
                                                <CardHeader className="text-left">
                                                    <CardTitle>
                                                    {product.data.title} <Badge variant="secondary">{product.data.catalogueNumber}</Badge>
                                                    </CardTitle>
                                                    <CardDescription>
                                                    #{product.data.content}
                                                    </CardDescription>
                                                </CardHeader>
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader>
                                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                            <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter>
                                            <Button>Submit</Button>
                                            <DrawerClose>
                                                <Button variant="outline">Cancel</Button>
                                            </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer></Card>
                                ))}
                            </div>
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


