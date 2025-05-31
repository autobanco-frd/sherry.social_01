import { NextRequest, NextResponse } from "next/server";
import { avalancheFuji } from "viem/chains";
import {
  createMetadata,
  Metadata,
  ValidatedMetadata,
  ExecutionResponse,
} from "@sherrylinks/sdk";
import { serializeTransaction } from "viem";

// Dirección del contrato desplegado
const COFFEE_TIP_CONTRACT = "0xaf6771D04668b053013E491CC70F13f1adb7A41B" as `0x${string}`;

export async function GET(req: NextRequest) {
  try {
    const host = req.headers.get("host") || "localhost:3000";
    const protocol = req.headers.get("x-forwarded-proto") || "http";
    const serverUrl = `${protocol}://${host}`;

    const metadata: Metadata = {
      url: "https://sherry.social ",
      icon: "☕",
      title: "Send Me Coffee ☕",
      baseUrl: serverUrl,
      description: "Haz click para enviar 0.01 AVAX como café",
      actions: [
        {
          type: "dynamic",
          label: "Enviar Café ☕",
          chains: { source: "fuji" },
          path: "/api/example",
          params: [
            {
              name: "amount",
              label: "Elige cantidad",
              type: "radio",
              required: true,
              options: [
                { label: "Pequeño ☕", value: 0.01, description: "0.01 AVAX" },
                { label: "Mediano 🧋", value: 0.05, description: "0.05 AVAX" },
                { label: "Grande 🍵", value: 0.1, description: "0.1 AVAX" },
              ],
            },
          ],
        },
      ],
    };

    const validated: ValidatedMetadata = createMetadata(metadata);

    return NextResponse.json(validated, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
    });
  } catch (error) {
    console.error("Error creando metadata:", error);
    return NextResponse.json({ error: "Error al crear metadata" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const amountStr = searchParams.get("amount");

    if (!amountStr) {
      return NextResponse.json(
        { error: "El parámetro 'amount' es requerido" },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    }

    const amount = parseFloat(amountStr);

    // Crear transacción para enviar AVAX al contrato
    const tx = {
      to: COFFEE_TIP_CONTRACT,
      value: BigInt(Math.floor(amount * 1e18)), // Convertir a wei
      chainId: avalancheFuji.id,
    };

    const serialized = serializeTransaction(tx);

    const response: ExecutionResponse = {
      serializedTransaction: serialized,
     chainId: avalancheFuji.id.toString(), // ✅ Ahora es un string
      };

    return NextResponse.json(response, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Error procesando la solicitud:", error);
    return NextResponse.json(
      { error: "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}