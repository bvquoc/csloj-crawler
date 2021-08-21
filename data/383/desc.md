<center><img src = "/images/problems/383/BLSCALES.jpg" width = 500px></center>

Cửa hàng nhà Tèo bán hàng sử dụng cân đĩa thăng bằng. Có ~n~ quả cân đánh số từ ~1~ đến ~n~, quả thứ ~i~ có khối lượng là ~w_i~. Khi cần cân một mặt hằng nào đó, Tèo sẽ đặt mặt hàng cần cân lên một bên đĩa và chọn một số quả cân đặt lên đĩa còn lại sao cho cân thăng bằng, tổng khối lượng của những quả cân đặt trên đĩa sẽ là khối lượng của mặt hàng cần cân.

Nhà Tèo hiện đang bán ~m~ mặt hàng đánh số từ ~1~ đến ~m~, mặt hàng thứ ~i~ có khối lượng là ~v_i~ (Đấy là Tèo biết vậy thôi chứ khi bán vẫn phải cân cho khách hàng xem). Em hãy giúp bạn Tèo tính toán xem những mặt hàng nào có thể cân được nhé.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n~ và ~m~;
- Dòng thứ hai chứa ~n~ số nguyên dương ~w_1, w_2, …, w_n~ là khối lượng của ~n~ quả cân;
- Dòng thứ ba chứa ~m~ số nguyên dương ~v_1, v_2, …, v_m~ là khối lượng của ~m~ mặt hàng.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi ra một xâu độ dài ~m~, ký tự thứ ~i~ là `1` nếu mặt hàng thứ ~i~ có thể cân được và là `0` nếu mặt hàng thứ ~i~ không thể cân được.

## Ví dụ:
#### Dữ liệu vào:
```
3 4
1 2 5
1 2 3 4
```

#### Dữ liệu ra:
```
1110
```

## Giới hạn:
- ~1 ≤ n ≤ 20; 1 ≤ m ≤ 10^5; 1 ≤ w_i, v_i ≤ 10^6~.
- **Chú ý:** Có ~50\%~ có ~n ≤ 15~ và ~m ≤ 100~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)