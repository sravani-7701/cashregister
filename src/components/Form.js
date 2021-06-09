import React from 'react'

 const Form = ({amount,remarks,ttype,handleamount,handleremarks,handleSubmit,handlettype}) => {
    return (
        <div className="frm">
            <form onSubmit={handleSubmit}>
             <ul>
                 <li>
                 <label htmlFor="amount">Amount</label>
                  <input  type="text"  name="amount" value={amount} onChange={handleamount}/>

                 </li>
                 <li>
                 <input  type="text" placeholder="Remarks" value={remarks} onChange={handleremarks}/>
                 </li>
                 <li>
                     <label htmlFor="cd" className="cd">Credit/Debit</label>
                     <select id="cd" name="list" form="cform" value={ttype} onChange={handlettype}>
                     <option value="">Choose</option>
                     <option value="credit">Credit</option>
                     <option value="debit">Debit</option>
                    </select>

                 </li>
                 </ul>
                 <button type="submit">Save</button>
            </form>
        </div>
    )
}
export default Form
