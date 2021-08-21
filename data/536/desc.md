Nhân ngày ~8/3~, một bạn nam trong lớp muốn tặng hoa cho một bạn nữ mà sở thích của bạn nữ này kỳ quặc đến mức chỉ có ... máy tính mới hiểu được. Chẳng hạn như bạn nữ này cho rằng trong bó hoa được tặng, đã có hoa hồng thì phải có hoa cúc, đã có hoa cúc thì phải có hoa phăng, mà đã có hoa phăng thì lại phải có ... hoa hồng. Và nếu như ai đem tặng cô ta một bó hoa không ưng ý thì thà không tặng còn hơn bởi hậu quả ra sao thì cũng chỉ có máy tính mới biết được.

**Yêu cầu:** Hãy chọn một bó hoa gồm ít loại hoa nhất mà vẫn phù hợp với sở thích của bạn nữ khó tính đó.

## Dữ liệu vào:
- Dòng đầu ghi hai số ~n, m~ là số lượng các loại hoa và ~m~ ràng buộc dạng nếu tặng hoa ~u~ thì phải tặng cả hoa ~v~;
- ~m~ dòng tiếp theo, mỗi dòng ghi hai số ~u~ và ~v~ cho biết: Nếu đã tặng loại hoa ~u~ thì sẽ phải tặng luôn cả loại hoa ~v~.

## Dữ liệu ra:
- Dòng đầu ghi số nguyên dương ~k~ là số loại hoa chọn ra được;
- Dòng hai ghi số hiệu của ~k~ loại hoa được chọn (theo thứ tự tăng dần), nếu có nhiều cách chọn thì in ra cách chọn sao cho dãy các bông hoa được chọn có thứ tự từ điển nhỏ nhất.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ:
<center><img src="/images/problems/536/AFLOWERS.png" width="400px" /></center>

#### Dữ liệu vào:
```
12 16
1 2
2 7
3 1
4 6
5 4
6 5
6 12
7 3
8 6
8 7
8 9
9 12
10 9
11 9
11 10
12 11
```

#### Dữ liệu ra:
```
4
1 2 3 7
```

**Mở rộng:** Cho biết giá tiền mỗi loại hoa, hãy chọn một bó hoa rẻ tiền nhất!!!

## Giới hạn:
- ~1 ≤ n ≤ 1000; 0 ≤ m ≤ \frac{n(n – 1)}{2}~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)