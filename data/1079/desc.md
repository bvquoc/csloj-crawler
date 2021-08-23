**<center>NGUỒN: PreVNOI Ⅸ (BẮC GIANG 2019)</center>**
<br>

Giáo sư $X$ đang dạy các bé trường mầm non **SuperKids** về chuyển động đều. Thí nghiệm hôm nay được thực hiện trên một mặt bàn hình chữ nhật kích thước $m×n$ trên đó xác định hệ tọa độ Descartes vuông góc $Οxy$. Góc trái dưới của mặt bàn nằm ở tọa độ $(0,0)$ còn góc phải trên nằm ở tọa độ $(m,n)$.

Giáo sư $X$ đặt hai viên bi trên mặt bàn, kích thước các viên bi là không đáng kể, có thể coi là một chất điểm. Giáo sư đẩy hai viên bi cùng lúc tại thời điểm $0$, một viên bi hướng từ điểm $A$ tới điểm $B$ và viên bi còn lại hướng từ điểm $C$ tới điểm $D$. Tốc độ của các viên bi được tính toán kỹ lưỡng sao cho trong $1$ giây, viên bi thứ nhất đi được đúng quãng đường $AB$ còn viên bi thứ hai đi được đúng quãng đường $CD$ nếu như không xảy ra va chạm.

Hai viên bi di chuyển theo đúng nguyên lý của chuyển động đều trong môi trường không có ma sát. Mỗi khi bi đập vào cạnh bàn, nó giữ nguyên tốc độ và đổi hướng (góc phản xạ đúng bằng góc tới), trường hợp bi đập vào góc bàn, nó sẽ di chuyển theo hướng ngược lại với tốc độ không đổi.

Nhiệm vụ của bạn là giúp các bé xác định thời điểm sớm nhất mà hai viên bi va chạm nhau (tức là thời điểm sớm nhất mà hai viên bi đến cùng một vị trí trên bàn)

Ứng với mỗi test, nếu hai viên bi không thể va chạm, in ra trên một dòng số -1. Nếu không in ra 2 số nguyên dương p và q trên một dòng, tương ứng là tử số và mẫu số của phân số tối giản p/q ứng với thời điểm hai viên bi va chạm.

## Dữ liệu vào:
- Dòng đầu chứa số $T≤10^4$ là số tests
- Các dòng sau, mỗi dòng chứa một test, gồm $10$ số nguyên $m,n,x_A,y_A,x_B,y_B,x_C,y_C,x_D,y_D$ cách nhau bởi dấu cách, tương ứng là chiều ngang, chiều dọc của bảng, hoành độ và tung độ các điểm $A, B, C, D$ theo đúng thứ tự đó ($1≤m,n≤100$; tọa độ các điểm không nằm ngoài bảng, dữ liệu cũng đảm bảo đoạn thẳng $AB$ cũng như đoạn thẳng $CD$ không đi dọc cạnh bàn, các điểm $A, B, C, D$ hoàn toàn phân biệt)

## Dữ liệu ra:
- Ứng với mỗi test, nếu hai viên bi không thể va chạm, in ra trên một dòng số $-1$. Nếu không in ra $2$ số nguyên dương $p$ và $q$ trên một dòng, tương ứng là tử số và mẫu số của phân số tối giản $\frac{p}{q}$ ứng với thời điểm hai viên bi va chạm.

## Ví dụ:
### Dữ liệu vào:
```
5
7 2 0 0 1 2 7 2 6 0
3 3 0 0 3 3 3 0 2 1
4 4 0 2 2 4 3 2 2 2
4 4 1 0 4 4 3 0 0 4
9 7 0 0 1 1 9 0 8 7
```

### Dữ liệu ra:
```
7 2
3 2
-1
1 3
63 2
```

### Giải thích:

<center><img src="/images/problems/1078/motion.svg" width=800px></center>
<center>Hình minh họa cho test đề bài</center>

## Giới hạn:
- **Subtask** $\#1$: $40\%$ số điểm: $T≤10$ và $m,n≤10$
- **Subtask** $\#2$: $40\%$ số điểm: $T≤1000$
- **Subtask** $\#3$: $20\%$ số điểm không có ràng buộc bổ sung
### Chú ý: Bài này chấm theo tỉ lệ phần trăm số test đúng