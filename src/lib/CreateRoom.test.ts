import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen, logDOM } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import CreateRoom from "./CreateRoom.svelte";

describe("CreateRoom", () => {
  it("should render the create room button with defined label", async () => {
    render(CreateRoom, { props: { buttonText: "Create Room" } });
    const button = screen.getByTestId("create-room-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Create Room");
  });
});
