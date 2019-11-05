// 锯切计划
 let planData = [
     {
         time:'2019-22-04',
         type:'4145H',
         size:'φ50',
         num:'L53697',
         amount:20,
         weight:50,
         length:10,
         plan_amount:60,
         plan_length:60,
         hadCompletedAmount:60,
         hadCompletedWeight:48,
         hadCompletedPackageAmount:5,
         status:'锯切中'
     },
     {
        time:'2019-22-04',
        type:'4145H',
        size:'φ50',
        num:'L53697',
        amount:20,
        weight:50,
        length:10,
        plan_amount:60,
        plan_length:60,
        hadCompletedAmount:60,
        hadCompletedWeight:48,
        hadCompletedPackageAmount:5,
        status:'锯切中'
    },
    {
        time:'2019-22-04',
        type:'4145H',
        size:'φ50',
        num:'L53697',
        amount:20,
        weight:50,
        length:10,
        plan_amount:60,
        plan_length:60,
        hadCompletedAmount:60,
        hadCompletedWeight:48,
        hadCompletedPackageAmount:5,
        status:'未锯切'
    }
 ]

 // 锯切记录
 let recordData = [
    {
        id:1,
        time:'2019-22-04',
        type:'4145H',
        num:'L53697',
        packageNum:3,
        amount:20,
        weight:50,
        length:10,
        inputName:'张三'
    },
    {
        id:1,
        time:'2019-22-04',
        type:'4145H',
        num:'L53697',
        packageNum:3,
        amount:20,
        weight:50,
        length:10,
        inputName:'张三'
    },
    {
        id:1,
        time:'2019-22-04',
        type:'4145H',
        num:'L53697',
        packageNum:3,
        amount:20,
        weight:50,
        length:10,
        inputName:'张三'
    }
]

 planTable(planData)
 recordTable(recordData)

 function planTable(planData){
     let str = ''
     for(let i=0; i<planData.length; i++){
         str += `
            <tr>
                <td>${planData[i].time}</td>
                <td>${planData[i].type}</td>
                <td>${planData[i].size}</td>
                <td>${planData[i].num}</td>
                <td>${planData[i].amount}</td>
                <td>${planData[i].weight}</td>
                <td>${planData[i].length}</td>
                <td>${planData[i].plan_amount}</td>
                <td>${planData[i].plan_length}</td>
                <td>${planData[i].hadCompletedAmount}</td>
                <td>${planData[i].hadCompletedWeight}</td>
                <td>${planData[i].hadCompletedPackageAmount}</td>
                <td style='${planData[i].status == "未锯切" ? "color:red" : ""}'>${planData[i].status}</td>
                <td>
                    <span class='inputBtn' onclick='inputInfo(${JSON.stringify(planData[i])})'>录入</span>
                </td>
            </tr>
         `
     }
     $('.planTable tbody').append(str)
 }

 function recordTable(data){
    let str = ''
    for(let i=0; i<data.length; i++){
        str += `
           <tr>
               <td>${data[i].id}</td>
               <td>${data[i].time}</td>
               <td>${data[i].type}</td>
               <td>${data[i].num}</td>
               <td>${data[i].packageNum}</td>
               <td>${data[i].amount}</td>
               <td>${data[i].weight}</td>
               <td>${data[i].length}</td>
               <td>${data[i].inputName}</td>
               <td>
                    <span class='deleteBtn' onclick='deleteInfo(${JSON.stringify(data[i])})'>删除</span>
               </td>
               <td>
                    <span class='printBtn' onclick='printInfo(${JSON.stringify(data[i])})'>打印</span>
               </td>
           </tr>
        `
    }
    $('.recordTable tbody').append(str)
}

// 关闭弹框
function closeBox(type){
    if(type == 'delete_confirm'){
        $('.delete_confirm_box').css({
            display:'none'
        })
    }else if(type == 'info_input'){
        $('.info_input_box').css({
            display:'none'
        })
    }
}

//信息录入  
 function inputInfo(obj){
     console.log(obj)
     $('.info_input_box').css({
         display:'block'
     })
     $('.info_input_box .body').html('')
     let str = `
            <ul>
                <li>
                    <span>钢种：</span>
                    <span>123</span>
                </li>
                <li>
                    <span>规格：</span>
                    <span>123</span>
                </li>
                <li>
                    <span>炉号：</span>
                    <span>123</span>
                </li>
                <li>
                    <span>短坯长度：</span>
                    <span>123</span>
                </li>
                <li class="input">
                    <span>短坯支数：</span>
                    <span>
                        <input id="inputAmount" type="text" value="">
                    </span>
                </li>
                <li class="input">
                    <span>短坯重量：</span>
                    <span>
                        <input id="inputWeight" type="text" value="">
                    </span>
                </li>
            </ul>
     `
     $('.info_input_box .body').append(str)
 }
// 保存录入得信息
function saveInputInfo(){
    if(!$('#inputAmount').val() || !$('#inputWeight').val()){
        alert("不能为空")
        return
    }
    console.log($('#inputAmount').val(),$('#inputWeight').val())
    closeBox('info_input')
}

//  信息删除
function deleteInfo(obj){
    console.log(obj)
    $('.delete_confirm_box').css({
        display:'block'
    })
    $('.delete_confirm_box').attr('id',obj.id)
}

// 确定删除信息
function deleteConfirm(){
    console.log($('.delete_confirm_box').attr('id'))
    closeBox('delete_confirm')
}

// 信息打印
function printInfo(obj){
    console.log(obj)
    $('.codeContainer .details').html('')
    $('#qrcode').html('')
    let str = `
            <ul>
                <li>
                    锯切日期：${obj.time}
                </li>
                <li>
                    包号：${obj.time}
                </li>
                <li>
                    钢种：${obj.time}
                </li>
                <li>
                    支树：${obj.time}
                </li>
                <li>
                    规格：${obj.time}
                </li>
                <li>
                    长度：${obj.time}
                </li>
                <li>
                    炉号：${obj.time}
                </li>
                <li>
                    重量：${obj.time}
                </li>
            </ul>
    `
    $('.codeContainer .details').append(str)
    // 生成二维码
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 100,
        height : 100
    })
    qrcode.makeCode("http://baidu.com")
    // 局部打印
    setTimeout(function(){
        $('.codeContainer').jqprint()
    },1000)
}


