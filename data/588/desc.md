Khi khai quật một di chỉ thời trung cổ, các nhà khảo cổ đào được $n$ tấm bảng gốm $(0 ≤ n ≤ 1000)$. Giải mã văn bản ghi trên đó người ta hiểu rằng mỗi tấm mô tả một phản ứng điều chế chất $B$ từ chất $A$. Đó là thành tựu khoa học của các nhà giả kim thuật. Người ta không điều chế được vàng bằng các phản ứng hóa học, nhưng đã khám phá ra rất nhiều điều mới trong hóa học.

**Yêu cầu:** Cho $n$ thông báo dạng $Chất_i->Chất_j$ cho biết bằng một phản ứng hóa học có thể điều chế $Chất_j$ từ $Chất_i$. Hãy xác định xem từ $Chất_A$ ta có thể nhận được $Chất_B$ hay không. Nếu có thì chỉ ra số phản ứng tối thiểu cần thực hiện, trong trường hợp ngược lại – đưa ra số $-1$. Các tên chất $(Chất_i, Chất_j, Chất_A, Chất_B)$ có độ dài không quá $100$ ký tự, bao gồm chữ cái la tinh hoa hoặc thường, các ký tự số. Có phân biệt chữ hoa và chữ thường. Số lượng các chất khác nhau không quá $100$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n$;
- Mỗi dòng trong $n$ dòng tiếp theo chứa một thông báo dạng $Chất_i->Chất_j$;
- Dòng thứ $n+2$ chứa xâu ký tự xác định tên chất $A$;
- Dòng thứ $n+3$ chứa xâu ký tự xác định tên chất $B$.

## Dữ liệu ra:
- Đưa ra một số nguyên – số phản ứng cần thực hiện hoặc số $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
5
Aqua -> AquaVita
AquaVita -> PhilosopherStone
AquaVita -> Argentum
Argentum -> Aurum
AquaVita -> Aurum
Aqua
Aurum
```

#### Dữ liệu ra:
```
2
```