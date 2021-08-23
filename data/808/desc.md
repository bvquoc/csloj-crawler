**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIII (TUYÊN QUANG 2017)</center>**
<br>

Trung tâm bồi dưỡng tài năng đã được thành lập, thầy Hòa là một giáo viên giỏi của trường **CTQ** đã được mời tham gia bồi dưỡng cho các tài năng. Một bài toán thú vị mà thầy Hòa giao cho các tài năng như sau:

Cho $n$ phân số

$$\frac{a_1}{b_1} ,\frac{a_2}{b_2} ,…,\frac{a_n}{b_n} \left(a_i,b_i\text{ nguyên dương}\right)$$

hãy tìm dãy chỉ số $1≤i_1<i_2<⋯<i_k≤n$ sao cho

$$\frac{{a_i}_1}{{b_i}_1} <\frac{{a_i}_2}{{b_i}_2} <⋯<\frac{{a_i}_k}{{b_i}_k}\text{  mà }k\text{ lớn nhất có thể.}$$

Các tài năng rất hào hứng và nhanh chóng tìm được hướng giải quyết cho bài toán. Thầy Hòa tiếp tục mở rộng bài toán, hãy tìm cách đảo lại một số phân số nếu muốn (phân số $\frac{a_i}{b_i}$  đảo lại thành phân số $\frac{b_i}{a_i}$), sau đó lại tìm dãy chỉ số thỏa mãn đề bài mà $k$ lớn nhất có thể.

**Yêu cầu**: Cho $n$ phân số và số nguyên $w$, trong đó $w=0$ nghĩa là không được phép đảo bất kỳ một phân số nào (bài toán ban đầu) hoặc $w=1$ nếu được phép đảo phân số (bài toán mở rộng), hãy đưa ra giá trị $k$ lớn nhất có thể.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên $n,w$;
- Dòng thứ $i\ \left(i=1,2,…,n\right)$ trong $n$ dòng tiếp theo chứa hai số nguyên dương $a_i,b_i$ có giá trị không vượt quá $10^9$ lần lượt là tử số và mẫu số của phân số thứ $i$.

## Dữ liệu ra:
- Ghi ra một số nguyên là giá trị $k$ lớn nhất tìm được.

## Ví dụ:
### Dữ liệu vào:
```
4 0
5 1
1 3
3 2
1 2
```

### Dữ liệu ra:
```
2
```

### Dữ liệu vào:
```
4 1
5 1
1 3
3 2
1 2
```

### Dữ liệu ra:
```
4
```

## Ràng buộc:
- Có $20\%$ số test ứng với $20\%$ số điểm của bài có $n≤10;w=0$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $n≤10;w=1$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $n≤100;w=0$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $n≤100;w=1$;
- Có $10\%$ số test khác ứng với $10\%$ số điểm của bài có $n≤10^5;w=0$;
- Có $10\%$ số test còn lại ứng với $10\%$ số điểm của bài có $n≤10^5;w=1$.