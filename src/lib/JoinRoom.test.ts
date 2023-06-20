import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen, logDOM } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import JoinRoom from "./JoinRoom.svelte";

describe("JoinRoom", () => {
	it("should accept any pattern if none passed in, enable button", async () => {
		render(JoinRoom);
		const inputField = screen.getByTestId("room-input");
		const button = screen.getByTestId("join-button");
		await fireEvent.input(inputField, { target: { value: "ABC" } });
		expect(button).toBeEnabled();
	});

	it("should enable button only when pattern passed in is met", async () => {
		render(JoinRoom, { props: { roomCodePattern: /^[A-Z]{6}$/ } });
		const inputField = screen.getByTestId("room-input");
		const button = screen.getByTestId("join-button");
		await fireEvent.input(inputField, { target: { value: "ABC" } });
		expect(button).toBeDisabled();
		await fireEvent.input(inputField, { target: { value: "ABCDEF" } });
		expect(button).toBeEnabled();
	});
});
