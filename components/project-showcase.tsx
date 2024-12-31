"use client";

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Image,
    Card,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import {ReactNode, useState} from "react";
import {BsGlobe} from "react-icons/bs";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

import {LinkPreview} from "@/components/link-preview";
import {PiFinnTheHumanDuotone} from "react-icons/pi";

export type ProjectProps = {
    title: string;
    description: string;
    additionalInfo?: string[];
    links: { label: string; url: string; icon?: ReactNode }[];
    highlights?: { imageUrl: string; title: string }[];
    logoUrl?: string;
    badgeText?: string;
    badgeInfo?: {
        title: string;
        content: string;
    };
};

const ProjectCard = ({
                         title,
                         description,
                         additionalInfo,
                         links,
                         highlights,
                         logoUrl,
                         badgeText,
                         badgeInfo,
                     }: ProjectProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);


    const updateIndex = (newIndex: number) => {
        if (newIndex >= 0 && newIndex < (highlights?.length ?? 0)) {
            setCurrentImageIndex(newIndex);
        }
    };

    return (
        <>
            <Card className="relative overflow-hidden rounded-lg bg-background p-3 mb-6">
                <div>
                    <h2 className="flex items-center justify-between">
                        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
                            <a
                                className="text-lg font-medium sm:text-xl"
                                href={links[0]?.url}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {title}
                            </a>
                            {badgeText && badgeInfo && (
                                <button
                                    className="flex items-center gap-1 rounded-3xl px-2 py-0.5 text-xs transition-colors bg-yellow-400 text-black hover:bg-yellow-600"
                                    onClick={onOpen}
                                >
                                    {badgeText}
                                </button>
                            )}
                        </div>
                        {logoUrl && title && (
                            <div className="absolute right-4 top-4 hidden sm:block">
                                <Image
                                    alt={title}
                                    className="h-12 w-12 opacity-40"
                                    src={logoUrl}
                                />
                            </div>
                        )}
                    </h2>
                    <p className="my-3 text-sm sm:text-base pr-0 sm:pr-14">
                        {description}
                    </p>
                    {additionalInfo && (
                        <>
                            <Button
                                className={`flex items-center justify-center bg-primary-300 px-1 mb-2 text-sm font-normal transition-colors hover:bg-primary-400 hover:font-bold hover:opacity-100 w-full py-2 sm:py-1.5 ${showAdditionalInfo ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-background`}
                                onPress={() => setShowAdditionalInfo(!showAdditionalInfo)}
                            >
                                <PiFinnTheHumanDuotone size={24}/>
                                {showAdditionalInfo ? "Hide" : "Show"} additional info
                            </Button>
                            <div className={`inline ${showAdditionalInfo ? "" : "hidden"}`}>
                                <ul className="flex flex-col gap-1">
                                    {additionalInfo.map((info, index) => (
                                        <li
                                            key={index}
                                            className="bg-primary-100 px-1 font-normal bg-gradient-to-l from-background py-2 sm:py-1.5 rounded-md"
                                        >
                                            {info}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <div className="-mx-3 -mb-3 -mt-3 flex items-center justify-between p-3">
                    <div className="flex items-center gap-3 text-primary-300">
                        {links.map((link, index) => (
                            <LinkPreview
                                key={index}
                                className="flex items-center gap-1 rounded-lg py-1 text-base transition-colors hover:font-bold sm:text-sm"
                                url={link.url}
                            >
                                {link.icon ?? <BsGlobe/>}
                                <span className="hidden sm:inline-block">{link.label}</span>
                            </LinkPreview>
                        ))}
                    </div>
                </div>
                {highlights && (
                    <div className="-mx-3 -mb-3 mt-2 bg-gradient-to-b to-primary-900 p-3">
                        <div className="flex items-center gap-2 sm:gap-0 justify-between sm:flex-row flex-row">
                            <div className="relative flex flex-row items-center gap-2">
                                {highlights.map((highlight, index) => (
                                    <span
                                        key={index}
                                        className={`rounded-full bg-primary-200 ${index === currentImageIndex ? "px-3 py-0.5" : "w-3 h-3"} text-sm`}
                                    >
                    {index === currentImageIndex ? highlight.title : ""}
                  </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    className="rounded-lg bg-primary-200 p-1 hover:bg-primary-300"
                                    onClick={() => updateIndex(currentImageIndex - 1)}
                                >
                                    <FaAngleLeft/>
                                </button>
                                <button
                                    className="rounded-lg bg-primary-200 p-1 hover:bg-primary-300"
                                    onClick={() => updateIndex(currentImageIndex + 1)}
                                >
                                    <FaAngleRight/>
                                </button>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row overflow-hidden">
                            <Image
                                alt={title}
                                className="w-full rounded-lg"
                                src={highlights[currentImageIndex].imageUrl}
                            />
                        </div>
                    </div>
                )}
            </Card>
            {/* Modal for badge text details */}
            <Modal isOpen={isOpen} placement={"auto"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {badgeInfo?.title}
                            </ModalHeader>
                            <ModalBody>
                                <p>{badgeInfo?.content}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default function ProjectShowcase({
                                            projects,
                                        }: {
    projects: ProjectProps[];
}) {
    return (
        <section>
            <h2 className="text-3xl mb-4">Projects</h2>
            <p className="mb-8">
                I have worked on a variety of projects over the years; some of them as a
                hobby, some as a proof of concept, and others to solve my team&#39;s problems. Here are some of the projects that I have worked on.
            </p>
            <div>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
