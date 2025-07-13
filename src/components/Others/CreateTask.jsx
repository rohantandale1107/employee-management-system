import React from 'react'

const CreateTask = () => {
    return (
        <div className="p-6 bg-[#1c1c1c] mt- rounded-2xl">
            <form className="flex flex-wrap justify-between gap-8">

                <div className="w-full md:w-[55%] space-y-4">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
                        <input
                            type="text"
                            placeholder="Make a UI design"
                            className="w-full text-sm py-2 px-3 rounded bg-[#212020] border border-gray-500 outline-none"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Date</h3>
                        <input
                            type="date"
                            className="w-full text-sm py-2 px-3 rounded bg-[#212020] border border-gray-500 outline-none"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
                        <input
                            type="text"
                            placeholder="Team member name"
                            className="w-full text-sm py-2 px-3 rounded bg-[#212020] border border-gray-500 outline-none"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Category</h3>
                        <input
                            type="text"
                            placeholder="Design, Backend, etc."
                            className="w-full text-sm py-2 px-3 rounded bg-[#212020] border border-gray-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-[#54B586] hover:bg-[#4e8a6d] text-white text-sm px-5 py-3 rounded shadow transition ease-in-out duration-300"
                    >
                        Create Task
                    </button>


                </div>


                <div className="w-full md:w-[40%] space-y-2">
                    <h3 className="text-sm text-gray-300 mb-1">Description</h3>
                    <textarea
                        rows="10"
                        placeholder="Enter task description here..."
                        className="w-full text-sm py-3 px-4 rounded bg-[#212020] border border-gray-500 outline-none resize-none"
                    ></textarea>
                </div>
            </form>
        </div>
    )
}

export default CreateTask