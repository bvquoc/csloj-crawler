**<center>NGUỒN: CONTEST PRACTICE VNOI20 (WEEK 4 - T11/2019)</center>**
<br>

Có $N$ viên bi màu được sắp thành một hàng trên mặt đất, mỗi viên bi có một màu thuộc trong số $K$ màu được đánh số từ $1$ đến $K$. Để tiện phân loại, Cuội muốn sắp xếp lại các viên bi này sao cho các viên bi cùng màu thì nằm cạnh nhau, như vậy Cuội sẽ thu được các đoạn liên tiếp gồm những viên bi cùng màu, mỗi màu chỉ thuộc vào đúng một đoạn. Mỗi bước, Cuội chỉ được đổi chỗ hai viên bi cạnh nhau. 

**Yêu cầu**: Hãy giúp Cuội sắp xếp lại các viên bi sao cho số bước đổi chỗ thực hiện là nhỏ nhất. 

## Dữ liệu vào:
- Gồm nhiều tests mỗi test được mô tả bằng hai dòng:
    + Dòng đầu ghi hai số nguyên dương $N,K\ (2 ≤ N ≤ 10^6;1 ≤ K ≤ 20)$;
    + Dòng hai ghi $N$ số nguyên dương là màu của $N$ viên bi theo thứ tự $1,2,...,N$ 
    + Kết thúc file dữ liệu bằng một dòng ghi hai số $0$ 

## Dữ liệu ra:
- Với mỗi test ghi kết quả trên một dòng cho bết số lần đổi chỗ ít nhất tìm được trong test tương ứng. 

## Ví dụ:
### Dữ liệu vào:
```
8 3 
1 1 2 1 2 3 2 3 
5 3 
3 2 1 3 2 
0 0
```

### Dữ liệu ra:
```
2
3
```

### Giải thích:
- Trong trường hợp thứ nhất cần sắp xếp lại thành $1\ 1\ 1\ 2\ 2\ 2\ 3\ 3$ với $2$ phép đổi chỗ (lần lượt: vị trí $3$ đổi chỗ cho vị trí $4$, vị trí $6$ đổi chỗ cho vị trí $7$).
- Trong trường hợp thứ hai cần sắp xếp lại thành $3\ 3\ 2\ 2\ 1$ với $3$ phép đổi chỗ (lần lượt: vị trí $3$ đổi chỗ cho vị trí $4$; vị trí $4$ đổi chỗ cho vị trí $5$; vị trí $2$ đổi chỗ cho vị trí $3$)

## Giới hạn:
+ Có $10\%$ số test tương ứng $10\%$ số điểm có $K = 2; N ≤ 20000$
+ Có $20\%$ số test khác tương ứng $20\%$ số điểm có $K = 3; N ≤ 10^6$   
+ Có $20\%$ số test khác tương ứng $20\%$ số điểm có $K ≤ 5; N ≤ 20000$
+ Có $30\%$ số test khác tương ứng $30\%$ số điểm có $K ≤ 10; N ≤ 10^6$   
+ Có $20\%$ số test còn lại tương ứng $20\%$ số điểm có $K ≤ 20;N ≤ 10^6$