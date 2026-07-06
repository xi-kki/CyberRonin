/**
 * CyberRonin — Hero Component Tests
 *
 * Verifies the hero section renders key elements:
 * title, subtitle, CTA button, and stat panels.
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the main title", () => {
    render(<Hero />);
    expect(screen.getByText(/UNMASK THE/i)).toBeInTheDocument();
    expect(screen.getByText(/FUTURE OF NFTs/i)).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Hero />);
    expect(screen.getByText(/shadow economy/i)).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<Hero />);
    const btn = screen.getByRole("button", { name: /explore collection/i });
    expect(btn).toBeInTheDocument();
  });

  it("renders stat panels with numbers", () => {
    render(<Hero />);
    expect(screen.getByText(/5000\+/i)).toBeInTheDocument();
    expect(screen.getByText(/40\+/i)).toBeInTheDocument();
  });
});
