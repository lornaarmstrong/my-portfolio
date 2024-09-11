// src/types.ts

// Contains data for a Work Experience
export interface Experience {
    id: number;
    imgSrc: string;
    timeframe: string;
    description: string;
    modalContent: React.ReactNode;
  }

// Contains data for a Technical Project
export interface Project {
    id: number;
    title: string;
    description: string;
    award?: string; // Optional property
    technology_used: string[];
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }