**<center>Nguồn: Free Contest 7</center>**

Để chuẩn bị cho cuộc thi Marathon, bò Bessie tham gia luyện tập trên một đường chạy trong vòng ~N~ phút ~(0 < N ≤ 10000)~. Với mỗi phút, Bessie có thể chạy hoặc nghỉ, nhưng cô không thể thực hiện cả hai tùy chọn này trong cùng một phút.

Yếu tố quyết định đến kết quả chạy của Bessie là thể lực của cô, được xác định lúc ban đầu bằng ~M\ (0 < M ≤ 500)~. Tại phút thứ ~k~, nếu Bessie quyết định chạy, cô sẽ chạy được ~D_k~ mét ~(0 < D_k ≤ 1000)~, nhưng đồng thời sẽ làm giảm thể lực của cô xuống ~1~. Bessie không được phép để thể lực của cô xuống dưới ~0~. Nếu cô chọn nghỉ trong phút đó, thể lực của cô sẽ tăng lên ~1~, nhưng không bao giờ giá trị này vượt quá ~M~. Một khi Bessie bắt đầu nghỉ, cô chỉ có thể tiếp tục chạy khi thể lực của cô trở lại như lúc ban đầu, tức là ~M~.

Kết thúc đường chạy, Bessie cần đảm bảo thể lực của cô vẫn là ~M~. Xác định quãng đường tối đa Bessie có thể chạy nếu áp dụng chiến thuật tối ưu.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~N~ và ~M~;
- ~N~ dòng tiếp theo, dòng thứ ~k~ chứa số nguyên ~D_k~.

## Dữ liệu ra:
- Một dòng duy nhất là độ dài quãng đường lớn nhất có thể chạy được.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
5
3
4
2
10
```

#### Dữ liệu ra:
```
9
```

#### Giải thích:
- Bessie sẽ chạy ở phút ~1~, nghỉ ở phút ~2~, chạy tiếp ở phút ~3~, nghỉ ở phút ~4~ và ~5~ và độ dài chạy được là ~5 + 4 = 9~.