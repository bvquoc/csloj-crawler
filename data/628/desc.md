**<center>Nguồn: Beginner Free Contest 6</center>**

Một nhà máy sản xuất gốm sứ có hai phân xưởng. Phân xưởng nặn và phân xưởng vẽ. Đầu tiên tất cả các sản phẩm được hình thành từ phân xưởng nặn sau đó nó được chuyển sang phân xưởng vẽ để vẽ các hoa văn lên sản phẩm trước khi nung. Do hai phân xưởng này ở cách xa nhau nên trong một ngày tất cả đồ gốm sản xuất trong ngày chỉ được vận chuyển một lần duy nhất từ phân xưởng nặn sang phân xưởng vẽ bằng một ô tô chuyên dụng. May mắn là nó chạy rất nhanh nên thời gian vận chuyển xem như bằng $0$. Sau khi hoàn thành vẽ xong, toàn bộ sản phẩm sẽ ngay lập tức đem đi nung (khi đó phân xưởng nặn sẽ ngồi chơi, phân xưởng nung làm việc).

Phân xưởng nặn có $N$ thợ thủ công, thợ thủ công thứ $i$ nặn một sản phẩm mất $a_i$ đơn vị thời gian. Phân xưởng vẽ có $M$ thợ thủ công, thợ thủ công thứ $j$ hoàn thành vẽ hoa văn lên một sản phẩm mất $b_i$ đơn vị thời gian.

Ngày làm việc kéo dài $T$ đơn vị thời gian và khi bắt đầu cả trong phân xưởng nặn và vẽ không có sản phẩm nào. Ngoài ra, sau khi kết thúc ngày làm việc trong cả hai phân xưởng này cũng không còn sản phẩm nào (tức là tất cả các sản phẩm đã hoàn thành cả hai phần việc nặn và vẽ).

Hỏi rằng số lượng sản phẩm tối đa mà hai phân xưởng sản xuất trong ngày là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $T$ $(1 ≤ T ≤ 10^9)$;
- Dòng thứ hai ghi số nguyên dương $N$ $(1 ≤ N ≤ 100000)$;
- Dòng thứ ba ghi $N$ số nguyên dương $a_1, a_2, ..., a_N\ (a_i ≤ 10^9)$;
- Dòng thứ tư ghi số nguyên dương $M\ (1 ≤ M ≤ 100000)$;
- Dòng thứ năm ghi $M$ số nguyên dương $b_1, b_2, ..., b_m\ (b_j ≤ 10^9)$.

## Dữ liệu ra:
- Một số nguyên duy nhất là số lượng sản phẩm tối đa có thể hoàn thành trong ngày của hai phân xưởng.

## Ví dụ:
### Dữ liệu vào:
```
20
2
4 6
3
2 3 5
```

## Dữ liệu ra:
```
5
```

## Giới hạn:
- $50\%$ số điểm có $T ≤ 1000, N, M ≤ 100$.