**<center>TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XⅤ (SƠN LA 2019)</center>**
<br>

Các môn thể thao phối hợp đòi hỏi vận động viên phải có sức mạnh và sự dẻo dai. Câu lạc bộ thể thao của nhà trường có $n$ bạn tham gia, người thứ $i\ (1≤i≤n)$ có sức mạnh $a_i$ và độ dẻo dai là $b_i$.
Đội thi đấu có $k$ người. Trong đội sẽ có một đội trưởng, những người còn lại là thành viên. Tiềm năng của đội được đánh giá bằng tổng sức mạnh của đội trưởng với độ dẻo dai của các thành viên.
Để chuẩn bị đấu giao hữu với trường bạn, huấn luyện viên quyết định sẽ đưa ra đội hình có tiềm năng thấp nhất, chủ yếu là tạo điều kiện cho mọi người có dịp cọ xát với thực tế, đồng thời cũng thử nghiệm các chiến thuật thi đấu.

Ví dụ, với $n=4$, sức mạnh và độ dẻo dai của mọi người tương ứng là $A=(3,7,1,6)$ và $B=(6,3,8,5)$. Nếu $k=3$ thì để có đội hình tiềm năng thấp nhất cần chọn các người $2,3,4$ và chỉ định người $3$ làm đội trưởng. Khi đó tiềm năng của đội sẽ là $1+3+5=9$.
Do không biết trước lần này cần phải cử bao nhiêu người đi nên huấn luyện viên phải lên phương án cho mọi khả năng với $k$ từ $1$ đến $n$.

**Yêu cầu**: Hãy đưa ra tiềm năng thấp nhất của đội được cử đi với $k$ lần lượt nhận giá trị từ $1$ đến $n$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n\ (1≤n≤2.10^5)$.
- Dòng thứ $i$ trong $n$ dòng sau chứa hai số nguyên $a_i$ và $b_i\ \left(1≤a_i,b_i≤10^9;1≤i≤n\right)$.

## Dữ liệu ra:
- Ghi ra  $n$ số nguyên – các tiềm năng thấp nhất tính được, mỗi số trên một dòng, số thứ $i\ (1≤i≤n)$ ứng với trường hợp $k=i$.

## Ví dụ: 
#### Dữ liệu vào:
```
4
3 6
7 3
1 8
6 5
```

#### Dữ liệu ra:
```
1
4
9
15
```

## Giới hạn:
- Có $20\%$ số test tương ứng $20\%$ số điểm có $N≤1000$ và $a_1=a_2=⋯=a_n$
- Có $20\%$ số test khác tương ứng $20\%$ số điểm có $N≤1000$ và $b_1=b_2=⋯=b_n$
- Có $30\%$ số test khác tương ứng $30\%$ số điểm có  $N≤5000; a_i,b_i≤10^6;1≤i≤n$.
- $30\%$ số test còn lại tương ứng $30\%$ số điểm không có ràng buộc gì thêm.