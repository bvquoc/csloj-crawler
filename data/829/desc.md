Khi xây dựng cầu thang đến các ngôi chùa nổi tiếng ở trên đỉnh núi, Chính quyền địa phương đã xác định ~N~ vị trí dọc theo sườn núi với các độ cao  ~a_1, a_2, …, a_n~. Trong đó ~a_i< a_{i+1}~ và ~0< i< N~.

Giá để xây dựng cầu thang từ vị trí ~i~ đến vị trí ~j~ là:
~~{min}_{v\in Z}\sum_{s=i}^{j}\left|a_s-v\right|^k~~

Để đẩy nhanh quá trình xây dựng cầu thang từ vị trí ~1~ đến vị trí ~N~, chính quyền địa phương đã quyết định giao việc cho ~G~ nhà xây dựng để xây dựng cầu thang song song nhau. Với ~N~ vị trí  sẽ được chia thành ~G~ đoạn khác nhau và mỗi đoạn sẽ được phụ trách bởi một nhà thầu xây dựng khác nhau.

Với ~G~ nhà thầu xây dựng ~(0 < G)~ bạn hãy phân chia để ~G~ nhà thầu xây dựng cây cầu với tổng chi phí bé nhất. Nếu số nhà thầu lớn hơn hoặc bằng số vị trí xây dựng thì chi phí xây dựng bằng ~0~. Do nhà thầu muốn quảng bá hình ảnh của mình nên xây dựng miễn phí cho nhà chùa!

## Dữ liệu vào:
- Dòng đầu ghi ba số nguyên ~N, G, K\ (1≤ N ≤2000, 1 ≤  G≤ N, 1 ≤ k ≤ 2)~;
- Dòng sau ghi dãy số nguyên ~a_1, a_2, … ,a_n\ ( 1≤ a_i ≤ 10^6, a_i ≤ a_{i+1}\ ∀0  < i< N)~ các vị trí cần xây dựng.

## Dữ liệu ra:
- Ghi ra giá trị xây dựng bé nhất.

## Ví dụ:
#### Dữ liệu vào:
```
5 1 1
1 2 3 4 5
```

#### Dữ liệu ra:
```
6
```

#### Dữ liệu vào:
```
5 1 2
1 2 3 4 5
```

#### Dữ liệu ra:
```
10
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)