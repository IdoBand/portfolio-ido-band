import imageDaniel from '/user-profile-images/imageDaniel.jpg'
import imageLilly from '/user-profile-images/imageLilly.jpg'
import imageJonathan from '/user-profile-images/imageJonathan.jpg'
import imageRose from '/user-profile-images/imageRose.jpg'
import imageDavid from '/user-profile-images/imageDavid.jpg'

interface Person {
    id: number
    name: string
    image: string
    text: string
    bgColor: string
    textColor: string
    spanSVG: string
    gridClassNameProps: string
    pHeight: string
}

const bgQuoteSVGurl = "bg-no-repeat bg-right-top bg-[url('/user-profile-images/bg-pattern-quotation.svg')]"

const personArray: Person[] = [
    {id: 0,
    name: 'Daniel Clifford',
    image: imageDaniel,
    text: '"Working with Ido is a pleasure, he brings positivity, attention to detail and professionalism to every project."',
    bgColor: 'bg-purple-700',
    textColor: 'text-white',
    spanSVG: bgQuoteSVGurl,
    gridClassNameProps: 'col-span-2 lg:col-span-4',
    pHeight: '',
    },
    {id: 1,
    name: 'Jonathan Walters',
    image: imageJonathan,
    text: '"Ido is a great collaborator, bringing creativity and problem-solving skills, always ready to lend a hand."',
    bgColor: 'bg-sky-950',
    textColor: 'text-white',
    spanSVG: '',
    gridClassNameProps: 'col-span-1 lg:col-span-4',
    pHeight: 'max-h-20',
    },
    {id: 2,
    name: 'Lilly Harmon',
    image: imageLilly,
    text: '"Ido is a talented developer and a great communicator, keeping everyone in the loop and on the same page."',
    bgColor: 'bg-blue-100',
    textColor: 'text-black',
    spanSVG: '',
    gridClassNameProps: 'col-span-1 lg:col-span-4',
    pHeight: 'max-h-20',
    },
    {id: 3,
    name: 'David Abrams',
    image: imageDavid,
    text: '"Working with Ido is a blast, bringing fun, energy and organization to every project."',
    bgColor: 'bg-blue-950',
    textColor: 'text-white',
    spanSVG: bgQuoteSVGurl,
    gridClassNameProps: 'col-span-2 lg:col-span-4',
    pHeight: '',
    },
    {id: 4,
    name: 'Rose White',
    image: imageRose,
    text: '"Grateful to have Ido as a colleague, he`s great in his field and always willing to share his expertise."',
    bgColor: 'bg-blue-100',
    textColor: 'text-black',
    spanSVG: bgQuoteSVGurl,
    gridClassNameProps: 'col-span-1 col-start-4 row-start-1 row-end-3 lg:col-span-4',
    pHeight: '',
    },
]

const Quotes = () => {
  return (
    <div className={`grid grid-cols-4 gap-4`}>
        {personArray.map((person, idx) => {
            return (
            <span key={idx} className={`${person.gridClassNameProps} ${person.bgColor} ${person.textColor} ${person.spanSVG} rounded-lg shadow-md p-4`}>
                <div className="w-full flex items-center justify-start pt-2 pl-2 text-lg">
                    <img src={`${person.image}`} className='rounded-full mr-2'/>
                    {person.name}
                </div>
                <p className="p-2 font-medium">
                    {person.text}
                </p >
                <p className={`p-2 font-light ${person.pHeight} overflow-hidden`}>
                    {"Lorem ipsum dolor sit amet. Ut aliquam quibusdam et commodi blanditiis rem tempore vitae et dignissimos provident in fuga exercitationem vel enim maiores ea illo rerum! Nam Quis laborum quo magnam debitis cum voluptatibus voluptas eos adipisci tempora."}
                </p>
            </span>
            )
        })}
    </div>
  )
}

export default Quotes