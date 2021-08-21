**<center>NGUỒN : VNU-OI 2020</center>**

Lớp học Competitive Programming của thầy Kiên có $n$ học sinh được đánh số từ $1$ tới $n$. Trước mỗi giờ học, thầy Kiên yêu cầu các học sinh xếp thành một hàng theo đúng thứ tự từ $1$ tới $n$ (học sinh thứ $i$ đứng tại vị trí thứ $i$) trước cửa lớp. 

Tuy nhiên, trong lớp của thầy Kiên cũng có những bạn học sinh rất nghịch ngợm, thường xuyên phá hàng và chen lấn xô đẩy khiến cho vị trí đứng của nhiều bạn không đúng so với yêu cầu. Nhận thấy do thầy Kiên chiều các em quá nên các em hư, thầy Kiên yêu cầu các học sinh mỗi ngày phải xếp hàng sao cho có đúng $m$ học sinh đứng đúng vị trí của mình.

Nói cách khác, một hoán vị $a_1, a_2, …, a_n$ (xếp ở vị trí $i$ là học sinh mang số thứ tự $a_i$) được thầy Kiên chấp nhận nếu tồn tại đúng $m$ giá trị $i$ sao cho:
- $1 ≤ i ≤ n$;
- #a_i = i$.

Sau khi đặt ra yêu cầu cho các học trò, thầy Kiên tự hỏi bản thân có bao nhiêu hoán vị thỏa mãn điều kiện trên. Nhưng đó là câu hỏi cho thầy Kiên, còn câu hỏi cho các bạn thí sinh VNU-OI hôm nay là tìm hoán vị thỏa mãn điều kiện trên có thứ từ điển thứ $k$.

Một cách rõ ràng hơn, nếu ta sắp xếp các hoán vị thỏa mãn tăng dần theo thứ tự từ điển, kết quả của bài toán sẽ là hoán vị thứ $k$ trong danh sách.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa ba số nguyên $n, m$ và $k$.

## Dữ liệu ra:
In ra một dòng duy nhất chứa hoán vị thứ $k$ theo thứ tự từ điển thỏa mãn điều kiện của Kiên. Nếu số lượng hoán vị thỏa mãn nhỏ hơn $k$, in ra $−1$.

## Ví dụ:
#### Dữ liệu vào:
```
3 1 1
```

#### Dữ liệu ra:
```
1 3 2
```

#### Dữ liệu vào:
```
3 2 1
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
5 3 7
```

#### Dữ liệu ra:
```
2 1 3 4 5
```

## Giới hạn:
- $m ≤ n$;
- $k ≤ 10^{18}$;
- Có $30\%$ số điểm tương ứng với $n ≤ 10$;
- Có $30\%$ số điểm khác tương ứng với $n ≤ 20$.
- Có $40\%$ số điểm còn lại tương ứng với $n ≤ 50$.