import { ref } from 'vue'

export interface Testimonial {
    rating: number
    content: string
    author: string
    image: string|null
    location: string
}

export function useTestimonials() {
    const testimonials = ref<Testimonial[]>([
        {
            "rating": 5,
            "content": "I am a Diabetic, and my feet are very important to me. The service I got was the best I have ever received for my feet. The attention to detail concerning calluses and cracks in my heals was top notch. I am a veteran I would recommend Trisha’s services in a minute.",
            "author": "Dorthy K.",
            "image": null,
            "location": "Minnesota"
        },
        {
            "rating": 5,
            "content": "Came and took excellent care of my feet two weeks ago and my feet feel great.",
            "author": "Michael Z.",
            "image": null,
            "location": "Minnesota"
        }
    ])

    const getTestimonialByAuthor = (author: string) => {
        return testimonials.value.find(testimonial => testimonial.author === author)
    }

    return {
        testimonials,
        getTestimonialByAuthor
    }
}
