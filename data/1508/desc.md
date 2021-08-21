**<center>NGUỒN: VOI 2017 - 2018</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Trò chơi khối hộp là một trò chơi với một khối hộp chữ nhật kích thước ~a\times b\times c~ đơn vị trên lưới hình chữ nhật ~H~ được chia thành ~m\times n~ ô vuong đơn vị. Các hàng của lưới được đánh số từ ~1~ tới ~m~ từ trên xuống dưới và các cột của lưới được đánh số từ ~1~ tới ~n~ từ trái qua phải. Ô nằm trên giao của hàng ~i~ và cột ~j~ được gọi là ô ~(i, j)~. Ban đầu khối hộp được đặt ở góc trái trên của lưới ~H~, cụ thể mặt đáy của khối hộp chứa đúng ~a\times b~ ô của lưới, là các ô nằm trong hình chữ nhật con của lưới ~H~ với ô ở góc trái trên là ~(1,1)~ và ô ở góc phải dưới là ~(a,b)~. Mỗi bước, người chơi có thể thực hiện một trong các loại thao tác sau:
- Đẩy khối hộp tịnh tiến lên trên, xuống dưới, sang trái hoặc sang phải một ô;
- Lật khối hộp tịnh tiến lên trên, xuống dưới, sang trái hoặc sang phải một ô.

**Ví dụ:** Các hình vẽ tronh Hình ~2~ dưới đây mô tả vị trí của khối hộp kích thước ~1\times 2\times 1~ sau khi thực hiện từng loại thao tác.
<center><img src="/images/problems/1508/blgame1.PNG" width=700px></center>

**<center>Hình 1</center>**

Khi bắt đầu trò chơi, tất cả các ô mà khối hộp đè lên được bật sáng màu xanh và có ~k~ ô khác trên lưới được bật sáng màu đỏ, các ô còn lại ở trạng thái tắt. Một thao tác được gọi là hợp lệ, nếu sau khi thực hiện thao tác này, khối hộp vẫn nằm gọn trên lưới ~H~ và không đè lên ô sáng màu đỏ nào. Sau khi một thao tác được thực hiện, những ô bị khối hộp đè lên đang ở trạng thái tắt sẽ được bật sáng màu xanh, những ô đang sáng màu xanh vẫn giữ nguyên trạng thái bật sáng màu xanh. Nhiện vụ của người chơi là tìm cách thực hiện dãy các thao tác hợp lệ để bật được nhiều ô sáng màu xanh nhất.

**Yêu cầu:** Cho khích thước khối hộp, kích thước của lưới ~H~ và vị trí của các ô sáng màu đỏ, hãy xác định số lượng nhiều nhất các ô được bật sáng màu xanh mà người chơi có thể đạt được.

## Dữ liệu vào:
- Dòng thứ nhất chứa sáu số nguyên dương ~a, b, c, m, n, k~, các số được ghi cách nhau bởi dấu cách;
- Dòng thứ ~s~ trong số ~k~ dòng tiếp theo chứa hai số nguyên dương được ghi cách nhau bởi dấu cách ~x_s, y_s~ là tọa độ của một ô đã bật sáng màu đỏ ~(s=1, 2, \ldots, k)~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số lượng nhiều nhất các ô được bật sáng màu xanh mà người chơi có thể đạt được.

## Ví dụ:
#### Dữ liệu vào:
```
1 2 1 3 3 2
2 2
3 3
```

#### Dữ liệu ra:
```
7
```

#### Giải thích:
<center><img src="/images/problems/1508/blgame2.PNG" width=200px></center>

Hình vẽ trên mô tả trạng thái bắt đầu trò chơi, trong đó hai ô tô đen là các ô sáng màu đỏ. Người chơi có thể thực hiện thao tác: Lật sang phải, đẩy xuống dưới, đẩy lên trên, đẩy sang trái, đẩy sang trái, đẩy xuống dưới, đẩy xuống dưới, cuối cùng đẩy sang phải để bật được ~7~ ô của lưới sáng màu xanh.

## Giới hạn:
- **Subtask** ~\#1~ ~(25\%\text{ số điểm}): a=b=c=1; m, n\le 100~;
- **Subtask** ~\#2~ ~(25\% \text{ số điểm}): a=b=c;m,n\le100~;
- **Subtask** ~\#3~ ~(25\% \text{ số điểm}): m, n\le100~;
- **Subtask** ~\#4~ ~(25\% \text{ số điểm}): m, n\le 1000~.