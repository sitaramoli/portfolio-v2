"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Section from "@/components/ui/Section";
import {portfolioData} from "@/config/portfolio-data";
import {useToast} from "@/hooks/use-toast";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const formSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters."}),
    email: z.string().email({message: "Invalid email address."}),
    message: z.string().min(10, {message: "Message must be at least 10 characters."}),
});

export default function ContactSection() {
    const {contact} = portfolioData;
    const {toast} = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch("/api/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong");
            }

            toast({
                title: "Message Sent!",
                description: "Thanks for reaching out. I'll get back to you soon.",
            });
            form.reset();
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message || "Failed to send message. Please try again later.",
                variant: "destructive",
            });
        }
    }


    return (
        <Section id="contact" title={contact.title} subtitle={contact.subtitle} className="bg-muted/30">
            <div className="max-w-2xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary text-center">Send Me a
                            Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 font-body">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground">Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder={contact.form.namePlaceholder} {...field}
                                                       className="bg-background focus:ring-primary focus:border-primary"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground">Email</FormLabel>
                                            <FormControl>
                                                <Input type="email"
                                                       placeholder={contact.form.emailPlaceholder} {...field}
                                                       className="bg-background focus:ring-primary focus:border-primary"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground">Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder={contact.form.messagePlaceholder} {...field}
                                                          rows={5}
                                                          className="bg-background focus:ring-primary focus:border-primary"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg"
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg">
                                    {contact.form.submitButtonText}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
