/*게시글 목록*/
showList();

function showList(){
	console.log(boards1);
	boards1 = JSON.parse(boards1);
	//files = JSON.parse(files);
	const $table = $("#content-wrap");
	let text = "";
	
	boards1.forEach(board => {
		text += `
			<tr>	
		        <td><input type="checkbox" class="checkbox"/></td>
		        <td>${board.userId}</td>
		        <td><a href="javascript:location.href='${contextPath}/templates/manager-doeunn/inquiriesAnswer.jsp'">${board.boardTitle}</a></td>
		        <td>${board.boardContent}</td>
				<td class="date">` + elapsedTime(board.boardCreationDate)+`</td>
		        <td>${board.boardReplyDate}</td>
		        <td class="pending">답변완료</td>
						 
			`;
			/*if(files[board.boardId]){
				text += `<img src="${contextPath}/upload/${files[board.boardId].fileSystemName}" class="preview">`;
			}*/
			text += `
		    </tr>
			`;
	});
	
	if(boards1.length == 0){
		text += `
			<li>
		        <div>
					현재 게시글이 없습니다. 게시글 작성을 해보세요!
				</div>
			</li>
		`
	}
	
	$table.append(text);
}
















