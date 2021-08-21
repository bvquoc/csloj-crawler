**<center>Nguồn:  Free Contest 03</center>**

Tại thủ đô của vương quốc Olympia chính quyền đã để dành một khu đất để xây dựng công viên WDisney. Đường biên của khu đất có dạng một hình đa giác lồi. Theo thiết kế, một số khoảnh đất sẽ được trồng cây xanh. Mỗi khoảnh đất như vậy có dạng một hình tròn được xác định bởi tâm và bán kính.

Bây giờ nhà thiết kế được giao nhiệm vụ trồng cây ở tất cả các điểm có toạ độ nguyên nằm trong phạm vi của công viên (có thể ở trên đường biên) và thuộc ít nhất một khoảnh (có thể trên đường biên của khoảnh đất). Nếu như có những khoảnh đất giao nhau, thì có thể có những điểm thuộc hai hoặc nhiều hơn khoảnh đất, dù vậy, trên những vị trí như vậy cũng chỉ trồng ~1~ cây.

**Yêu cầu:** Cho các toạ độ mô là đường biên của khu đất và các toạ độ của tâm và độ dài bán kính của các khoảnh đất, cần xác định số lượng cây cần trồng.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~N\ (3 ≤ N ≤ 10^5)~ là số lượng đỉnh của đa giác lồi mô là đường biên của khu đất;
- Mỗi dòng trong số ~N~ dòng tiếp theo chứa hai số nguyên là toạ độ của một đỉnh của đa giác. Các đỉnh được liệt kê theo thứ tự đi vòng quanh đa giác theo chiều kim đồng hồ;
- Dòng tiếp theo chứa số nguyên ~M\ (1 ≤ M ≤ 50000)~ là số lượng khoảnh cây xanh;
- Mỗi dòng trong số ~M~ dòng tiếp theo chứa ba số nguyên ~x, y~ và ~r~, trong đó ~(x, y)~ là toạ độ của tâm và ~r~ là bán kính của hình tròn mô tả đường biên của một khoảnh cây xanh;
- Các toạ độ là các số nguyên có trí tuyệt đối không vượt quá ~10^9~. Tổng độ dài của các bán kính không vượt quá ~10^5~.

## Dữ liệu ra:
- Ghi ra một số nguyên là số lượng cây xanh cần trồng.

## Ví dụ:
#### Dữ liệu vào:
```
3
0 0
15 0
15 15
3
3 3 4
5 5 7
15 15 1
```

#### Dữ liệu ra:
```
73
```

<center><img src="/images/problems/2017/ntrees.png" width=350></center>

## Giới hạn:
- Có ~60\%~ số lượng test thoả mãn: ~N ≤ 100~, và lời giải đúng cho trường hợp có thêm hạn chế:
    - Công viên có dạng hình chữ nhật với các cạnh song song với trục toạ độ đạt ~16\%~ số điểm;
    - ~N × M × R^2 ≤ 10^7~, trong đó ~R~ là bán kính lớn nhất trong các bán kính, đạt ~24\%~ số điểm;
    - Tồn tại hình vuông với các cạnh có độ dài ~2015~, song song với các trục toạ độ chứa toàn bộ khu đất (mỗi điểm thuộc khu đất đều thuộc hình vuông này) đạt ~20\%~ số điểm.
- ~40\%~ số lượng test: không có hạn chế bổ sung.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)