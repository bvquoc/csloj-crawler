**<center>Nguồn:  Free Contest 02</center>**

Bây giờ là thời điểm bầu cử. $V$ cử tri tham gia vào cuộc bầu cử, mỗi người sẽ bỏ $1$ lá phiếu cho một trong số $N$ đảng. $M$ công chức sẽ được chọn vào nghị viện. Sự chuyển đổi từ những lá phiếu thành các ghế trong nghị viện được thực hiện theo phương pháp D'Hondt với ngưỡng $5\%$. Chính xác hơn, giả sử các đảng được đánh số từ $1$ đến $N$ và họ nhận được lần lượt $V_1, V_2, ..., V_N$ phiếu bầu. Các ghế của nghị viện sẽ được phân bố như sau:
1. Tất cả các đảng nhận được ít hơn $5\%$ tổng số phiếu $V$ sẽ bị xóa khỏi danh sách.
2. Nghị viện ban đầu trống, tức là mọi đảng đều chưa có ghế nào trong nghị viện.
3. Với một đảng $P$ bất kỳ, thương số $Q_P=\frac{V_P}{S_P+1}$ sẽ được tính, với $V_P$ là tổng số lá phiếu mà đảng $P$ nhận được, và $S_P$ là số lượng ghế đã phân cho đảng $P$.
4. Đảng có thương số $Q_P$ lớn nhất sẽ được phân thêm $1$ ghế. Nếu có nhiều đảng có cùng thương số lớn nhất đó thì đảng nào có số hiệu nhỏ hơn sẽ giành được ghế.
5. Lặp lại bước $3$ và $4$ cho đến khi nghị viện đầy. Các lá phiếu đang được đếm và mới chỉ có một phần của tổng số $V$ lá phiếu được kiểm. Chúng ta tạm thời biết được số phiếu mà mỗi đảng đang có.

Viết chương trình tính toán cho mỗi đảng, trong số các khả năng có thể xảy ra sau khi tất cả $V$ lá phiếu đã được đếm, số lượng ghế lớn nhất và nhỏ nhất mà đảng đó giành được.

## Dữ liệu vào:
- Dòng đầu chứa các số nguyên $V, N$ và $M$ $(1 ≤ V ≤ 10^7, 1 ≤N ≤ 100, 1 ≤ M ≤ 200)$, số lượng phiếu bầu, số đảng và số ghế trong nghị viện;
- Dòng thứ hai chứa $N$ số nguyên – số lượng phiếu bầu mà mỗi đảng nhận được (trong số phiếu đã được kiểm). Tổng của những số này không quá $V$.

## Dữ liệu ra:
- Dòng đầu chứa $N$ số nguyên cách nhau bởi khoảng trống – số ghế lớn nhất mà mỗi đảng có thể giành được;
- Dòng thứ hai ghi $N$ số nguyên cách nhau bởi khoảng trống – số ghế nhỏ nhất mà mỗi đảng có thể giành được.

## Ví dụ:
### Dữ liệu vào:
```
20 4 5
4 3 6 1
```

### Dữ liệu ra:
```
3 3 3 2
1 0 1 0
```

### Dữ liệu vào:
```
100 3 5
30 20 10
```

### Dữ liệu ra:
```
4 3 3
1 1 0
```

### Giải thích:
- Trong ví dụ đầu tiên, $14$ phiếu bầu đã được kiểm và $6$ phiếu chưa. Để minh họa một kết quả có thể, giả sử rằng đảng đầu tiên nhận $2$ trong số $6$ lá phiếu đó, đảng thứ hai $0$ phiếu, đảng thứ ba $1$ phiếu và đảng thứ tư $3$ phiếu. Tổng số phiếu của các đảng sẽ là $6, 3, 7$ và $4$. Tất cả các đảng đều vượt qua ngưỡng $5\%$. Các ghế được phân bố như sau:
1. Các thương số ban đầu là $\frac{6}{1}, \frac{3}{1}, \frac{7}{1}$ và $\frac{4}{1}$; lớn nhất là $\frac{7}{1}$ nên đảng $3$ giành được $1$ ghế.
2. Các thương số bây giờ là $\frac{6}{1}, \frac{3}{1}, \frac{7}{2}$ và $\frac{4}{1}$; lớn nhất là $\frac{6}{1}$ nên đảng $1$ giành $1$ ghế.
3. Các thương số là $\frac{6}{2}, \frac{3}{1}, \frac{7}{2}$ và $\frac{4}{1}$; lớn nhất là $\frac{4}{1}$ nên đảng $4$ giành $1$ ghế.
4. Các thương số là $\frac{6}{2}, \frac{3}{1}, \frac{7}{2}$ và $\frac{4}{2}$; lớn nhất là $\frac{7}{2}$ nên đảng $3$ giành $1$ ghế.
5. Các thương số là $\frac{6}{2}, \frac{3}{1}, \frac{7}{3}$ và $\frac{4}{2}$; đảng $1$ và $2$ có cùng thương số $\frac{6}{2}$ và $\frac{3}{1}$, nhưng đảng $1$ có số hiệu nhỏ hơn nên giành được ghế cuối cùng.
- Trong kết quả này, số lượng ghế mà mỗi đảng giành được là $2, 0, 2$ và $1$. Do đảng thứ hai có thể sẽ không giành được ghế nào, nên số thứ hai trên dòng $2$ của **Dữ liệu ra** sẽ là $0$.