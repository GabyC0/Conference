"use client";

export default function Form() {
    return (
        <form className="">
            <label>
                <span>Email</span>
                <input type="email" name="email" id="name" placeholder="Email" />
            </label>
            <button className="" type="submit">Submit</button>
        </form>
    )
}